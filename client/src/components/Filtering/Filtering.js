import React, { useEffect, useState } from 'react'

const Filtering = ({ setFilter, usersList }) => {
  const initialState = {
    javaScript: false,
    python: false,
    golang: false
  }

  const [state, setState] = useState(initialState)

  useEffect(() => {
    updateFilter() // eslint-disable-next-line
  }, [state])

  const handleChange = (e) => {
    const { name } = e.target
    setState((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }))
  }

  const applyFilter = (arr, str) =>
    arr.filter((data) => data.techstack.includes(str))

  const updateFilter = () => {
    let result = usersList
    if (state.javaScript) result = applyFilter(result, 'JavaScript')
    if (state.python) result = applyFilter(result, 'Python')
    if (state.golang) result = applyFilter(result, 'Go')
    setFilter(result)
  }

  return (
    <div className='btn-group-toggle d-flex justify-content-center mb-5' data-toggle='buttons'
    style={{
      padding: '40px',
      backgroundColor: 'beige'
  }}
    >
      <input
        name='javaScript'
        value={state.javaScript}
        type='checkbox'
        onChange={handleChange}
      />
      <h4 className='mr-5'>
        JavaScript
      </h4>
      <input
        name='python'
        value={state.python}
        type='checkbox'
        onChange={handleChange}
      />
      <h4 className='mr-5'>Python</h4>
      <input
        name='golang'
        value={state.golang}
        type='checkbox'
        onChange={handleChange}
      />
      <h4>Golang</h4>
    </div>
  )
}

export default Filtering
