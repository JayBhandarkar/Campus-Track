const AssignmentCard = ({ assignment, onEdit, onDelete, onToggleStatus }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const isOverdue = new Date(assignment.dueDate) < new Date() && assignment.status === 'pending'

  return (
    <div className="card hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{assignment.title}</h3>
          <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
            {assignment.subject}
          </span>
        </div>
      </div>
      
      {assignment.description && (
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{assignment.description}</p>
      )}
      
      <div className="flex justify-between items-center mb-4">
        <span className={`text-sm ${isOverdue ? 'text-red-600 font-medium' : 'text-gray-500'}`}>
          Due: {formatDate(assignment.dueDate)}
          {isOverdue && ' (Overdue)'}
        </span>
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
          assignment.status === 'completed' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {assignment.status}
        </span>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-2">
        <button
          onClick={() => onToggleStatus(assignment)}
          className={`btn text-sm flex-1 ${
            assignment.status === 'completed' ? 'btn-secondary' : 'btn-success'
          }`}
        >
          {assignment.status === 'completed' ? 'Mark Pending' : 'Mark Complete'}
        </button>
        <button 
          onClick={() => onEdit(assignment)} 
          className="btn btn-secondary text-sm flex-1"
        >
          Edit
        </button>
        <button 
          onClick={() => onDelete(assignment._id)} 
          className="btn btn-danger text-sm flex-1"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default AssignmentCard