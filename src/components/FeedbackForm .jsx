import React, { useState } from 'react';


const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({ name: '', message: '' });

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve existing feedback from local storage
    const feedbackList = JSON.parse(localStorage.getItem('feedback')) || [];

    // Add new feedback to the list
    feedbackList.push(feedback);

    // Save updated feedback list to local storage
    localStorage.setItem('feedback', JSON.stringify(feedbackList));

    alert('Thank you for your feedback!');
    setFeedback({ name: '', message: '' }); // Reset form
  };

  return (
    
      <div className="bg-white shadow-lg p-6 rounded-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Feedback</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={feedback.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Message</label>
            <textarea
              name="message"
              placeholder="Write your feedback"
              value={feedback.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring focus:ring-blue-300 focus:outline-none"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    
  );
};

export default FeedbackForm;

                                      // @NavinMalakarCreation