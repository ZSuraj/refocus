import { useState, useEffect } from 'react'
import '../assets/FocusForm.css'

const FocusForm = () => {
  const [formData, setFormData] = useState({
    currentTask: '',
    sessionGoal: '',
    focusDuration: '',
    role: '',
    distractions: ''
  })

  useEffect(() => {
    // Load saved data from localStorage on component mount
    const savedData = localStorage.getItem('focusFormData')
    if (savedData) {
      setFormData(JSON.parse(savedData))
      console.log(savedData)
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => {
      const newData = { ...prevData, [name]: value }
      // Save to localStorage whenever form data changes
      localStorage.setItem('focusFormData', JSON.stringify(newData))
      return newData
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // You can add additional submission logic here if needed
    console.log('Form submitted:', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="focus-form">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Define your name"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="currentTask">What are you working on right now?</label>
        <input
          type="text"
          id="currentTask"
          name="currentTask"
          value={formData.currentTask}
          onChange={handleChange}
          placeholder="Define your current task/focus"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="sessionGoal">What's your goal for this session?</label>
        <input
          type="text"
          id="sessionGoal"
          name="sessionGoal"
          value={formData.sessionGoal}
          onChange={handleChange}
          placeholder="Set a clear objective for this session"
          required
        />
      </div>

      {/* <div className="form-group">
        <label htmlFor="focusDuration">How long do you want to focus?</label>
        <input
          type="number"
          id="focusDuration"
          name="focusDuration"
          value={formData.focusDuration}
          onChange={handleChange}
          placeholder="Enter duration in minutes"
          min="1"
          required
        />
      </div> */}

      <div className="form-group">
        <label htmlFor="role">How would you describe your role today?</label>
        <input
          type="text"
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          placeholder="e.g. coder, designer, student"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="distractions">What usually distracts you?</label>
        <textarea
          id="distractions"
          name="distractions"
          value={formData.distractions}
          onChange={handleChange}
          placeholder="What usually pulls your attention away?"
          required
        />
      </div>

      <button type="submit" className="submit-button">
        Start Focus Session
      </button>
    </form>
  )
}

export default FocusForm
