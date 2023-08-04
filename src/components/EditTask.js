import React from 'react'

const EditTask = ({ newTitle, setNewTitle, newDeadline, setNewDeadline}) => {
  return (
    <div className='task--edit'>
        <div className="input">
                        <input
                            type="text"
                            placeholder="Title"
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                        />
                    </div>

                    <div className="input">
                        <input
                            type="text"
                            placeholder="Deadline"
                            value={newDeadline}
                            onChange={(e) => setNewDeadline(e.target.value)}
                        />
                    </div>
    </div>
  )
}

export default EditTask