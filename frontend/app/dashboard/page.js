'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Header from '../../components/Header'
import AssignmentCard from '../../components/AssignmentCard'
import AssignmentModal from '../../components/AssignmentModal'
import { getAssignments, createAssignment, updateAssignment, deleteAssignment } from '../../lib/api'
import { useAuth } from '../../contexts/AuthContext'

export default function Dashboard() {
  const [assignments, setAssignments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingAssignment, setEditingAssignment] = useState(null)
  
  const { token, isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login')
      return
    }
    fetchAssignments()
  }, [isAuthenticated, router])

  const fetchAssignments = async () => {
    try {
      setLoading(true)
      const data = await getAssignments(token)
      if (Array.isArray(data)) {
        setAssignments(data)
      } else {
        setError('Failed to load assignments')
      }
    } catch (err) {
      setError('Failed to load assignments')
    } finally {
      setLoading(false)
    }
  }

  const handleCreateAssignment = async (formData) => {
    try {
      const newAssignment = await createAssignment(formData, token)
      if (newAssignment._id) {
        setAssignments([...assignments, newAssignment])
        setIsModalOpen(false)
        setError('')
      } else {
        setError('Failed to create assignment')
      }
    } catch (err) {
      setError('Failed to create assignment')
    }
  }

  const handleUpdateAssignment = async (formData) => {
    try {
      const updatedAssignment = await updateAssignment(editingAssignment._id, formData, token)
      if (updatedAssignment._id) {
        setAssignments(assignments.map(a => 
          a._id === editingAssignment._id ? updatedAssignment : a
        ))
        setIsModalOpen(false)
        setEditingAssignment(null)
        setError('')
      } else {
        setError('Failed to update assignment')
      }
    } catch (err) {
      setError('Failed to update assignment')
    }
  }

  const handleDeleteAssignment = async (id) => {
    if (window.confirm('Are you sure you want to delete this assignment?')) {
      try {
        await deleteAssignment(id, token)
        setAssignments(assignments.filter(a => a._id !== id))
        setError('')
      } catch (err) {
        setError('Failed to delete assignment')
      }
    }
  }

  const handleToggleStatus = async (assignment) => {
    const newStatus = assignment.status === 'completed' ? 'pending' : 'completed'
    try {
      const updatedAssignment = await updateAssignment(
        assignment._id, 
        { ...assignment, status: newStatus }, 
        token
      )
      if (updatedAssignment._id) {
        setAssignments(assignments.map(a => 
          a._id === assignment._id ? updatedAssignment : a
        ))
        setError('')
      }
    } catch (err) {
      setError('Failed to update assignment status')
    }
  }

  const handleEditAssignment = (assignment) => {
    setEditingAssignment(assignment)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setEditingAssignment(null)
  }

  const handleSubmitModal = (formData) => {
    if (editingAssignment) {
      handleUpdateAssignment(formData)
    } else {
      handleCreateAssignment(formData)
    }
  }

  const pendingAssignments = assignments.filter(a => a.status === 'pending')
  const completedAssignments = assignments.filter(a => a.status === 'completed')

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h1 className="text-3xl font-bold text-gray-900">My Assignments</h1>
          <button 
            onClick={() => setIsModalOpen(true)} 
            className="btn btn-primary"
          >
            + New Assignment
          </button>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {loading ? (
          <div className="text-center py-16">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading assignments...</p>
          </div>
        ) : assignments.length === 0 ? (
          <div className="text-center py-16">
            <div className="mx-auto h-24 w-24 text-gray-400 mb-4">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No assignments yet</h3>
            <p className="text-gray-600 mb-6">Create your first assignment to get started!</p>
            <button 
              onClick={() => setIsModalOpen(true)} 
              className="btn btn-primary"
            >
              Create Assignment
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {pendingAssignments.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Pending ({pendingAssignments.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {pendingAssignments.map(assignment => (
                    <AssignmentCard
                      key={assignment._id}
                      assignment={assignment}
                      onEdit={handleEditAssignment}
                      onDelete={handleDeleteAssignment}
                      onToggleStatus={handleToggleStatus}
                    />
                  ))}
                </div>
              </div>
            )}

            {completedAssignments.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Completed ({completedAssignments.length})
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {completedAssignments.map(assignment => (
                    <AssignmentCard
                      key={assignment._id}
                      assignment={assignment}
                      onEdit={handleEditAssignment}
                      onDelete={handleDeleteAssignment}
                      onToggleStatus={handleToggleStatus}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      <AssignmentModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitModal}
        assignment={editingAssignment}
      />
    </div>
  )
}