import { useReducer, useState } from "react"
initialState = {
  title: '',
  number: '',
  abstract: '',
  description: '',
  claims: [],
  inventors: [],
  applicant: '',
  filingDate: '',
  issueDate: '',
  pdf: '',//link to near blockchain
  file: null,
  loading: false,
  error: null,
  success: false
}

const actionSchema = {
  type: '',
  payload: {
    name: '',
    value: '',
    index: '',
  }
}

reducer = (state, action) => {
  switch (action.type) {
    case 'delete':
      return { ...state, [action.payload.name]: state[action.payload.name].filter((_, i) => i !== action.payload.value) }
    case 'update':
      return { ...state, [action.payload.name]: state[action.payload.name].map((claim, index) => (index === action.payload.index ? action.payload.value : claim)) }
    case 'set':
      if (action.payload.name === 'claims' || action.payload.name === 'inventors') {
        return { ...state, [action.payload.name]: [...state[action.payload.name], action.payload.value] }
      }
      return { ...state, [action.payload.name]: action.payload.value }
    case 'reset':
      return initialState
    default:
      throw new Error()
  }
}
export default function Upload() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const [newClaim, setNewClaim] = useState('');
  const [editingClaimIndex, setEditingClaimIndex] = useState(-1);
  const [newInventor, setNewInventor] = useState('');
  const [editingInventorIndex, setEditingInventorIndex] = useState(-1);


  //claims functions
  const handleChange = (event) => {
    setNewClaim(event.target.value);
  };

  const handleAddClaim = () => {
    dispatch({ type: 'set', payload: { name: 'claims', value: newClaim } });
    setNewClaim('');
  };

  const handleDeleteClaim = (index) => {
    dispatch({ type: 'delete', payload: { name: 'claims', value: index } });
  };

  const handleEditClaim = (index) => {
    setEditingClaimIndex(index);
    setNewClaim(state.claims[index]);
  };

  const handleUpdateClaim = () => {
    dispatch({ type: 'update', payload: { name: 'claims', value: newClaim, index: editingClaimIndex } });
    setNewClaim('');
    setEditingClaimIndex(-1);
  };

  const handleCancelEdit = () => {
    setNewClaim('');
    setEditingClaimIndex(-1);
  };

  //invetors functions
  const handleChangeInventor = (event) => {
    setNewInventor(event.target.value);
  };

  const handleAddInventor = () => {
    dispatch({ type: 'set', payload: { name: 'inventors', value: newInventor } });
    setNewInventor('');
  };

  const handleDeleteInventor = (index) => {
    dispatch({ type: 'delete', payload: { name: 'inventors', value: index } });
  };

  const handleEditInventor = (index) => {
    setEditingInventorIndex(index);
    setNewInventor(state.inventors[index]);
  };

  const handleUpdateInventor = () => {
    dispatch({ type: 'update', payload: { name: 'inventors', value: newInventor, index: editingInventorIndex } });
    setNewInventor('');
    setEditingInventorIndex(-1);
  };

  const handleCancelEditInventor = () => {
    setNewInventor('');
    setEditingInventorIndex(-1);
  };

  //submit form
  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch({ type: 'set', payload: { name: 'loading', value: true } })
    const formData = new FormData()
    formData.append('title', state.title)
    formData.append('number', state.number)
    formData.append('abstract', state.abstract)
    formData.append('description', state.description)
    formData.append('claims', JSON.stringify(state.claims))
    formData.append('inventors', JSON.stringify(state.inventors))
    formData.append('applicant', state.applicant)
    formData.append('filingDate', state.filingDate)
    formData.append('issueDate', state.issueDate)
    formData.append('pdf', state.pdf)
    formData.append('file', state.file)
    try {
      const res = await fetch('/api/patents', {
        method: 'POST',
        body: formData
      })
      const data = await res.json()
      if (data.success) {
        dispatch({ type: 'set', payload: { name: 'success', value: true } })
        dispatch({ type: 'reset' })
      } else {
        dispatch({ type: 'set', payload: { name: 'error', value: data.error } })
      }
    } catch (error) {
      dispatch({ type: 'set', payload: { name: 'error', value: error.message } })
    }
    dispatch({ type: 'set', payload: { name: 'loading', value: false } })
  }


  return (
    <div>
      Upload Patents Here!
      <div className="w-full h-auto min-h-screen flex flex-col items-center justify-center">
        <div className="w-[clamp(400px,50vw,800px)] flex items-center flex-col gap-2">
          <div className="flex flex-col w-full space-y-2">
            <h2>Add Your Patent</h2>
            <div className="flex flex-col justify-center items-center border-[2px] border-gray-300 p-2">
              <label>PDF, DOCX, DOC</label>
              <input type="file" name="pdf" value={state.pdf} accept=".pdf, .docx, .doc" onChange={(e) => dispatch({ type: 'set', payload: { name: e.target.name, value: e.target.files[0] } })} />
            </div>
            <h2>Add Inventors</h2>
            <div className="flex flex-col justify-center items-center border-[2px] border-gray-300 p-2">
              <ul>
                {state.inventors.map((inventor, index) => (
                  <li key={index}>
                    {inventor}
                    <button onClick={() => handleEditInventor(index)}>Edit</button>
                    <button onClick={() => handleDeleteInventor(index)}>Delete</button>
                  </li>
                ))}
              </ul>
              {editingInventorIndex !== -1 ? (
                <>
                  <input type="text" value={newInventor} onChange={handleChangeInventor} />
                  <button onClick={handleUpdateInventor}>Save</button>
                  <button onClick={handleCancelEditInventor}>Cancel</button>
                </>
              ) : (
                <>
                  <input type="text" value={newInventor} onChange={handleChangeInventor} />
                  <button onClick={handleAddInventor}>Add Inventor</button>
                </>
              )}
            </div>
            <h2>Add the Basics</h2>
            <div className="flex flex-col w-full justify-center items-center  border-[2px] border-gray-300 p-2">
              <div className="flex-row flex gap-2 w-full">
                <div className="flex flex-col w-full">
                  <label>Title</label>
                  <input type="text" name="title" className='w-full' value={state.title} onChange={(e) => dispatch({ type: 'set', payload: { name: e.target.name, value: e.target.value } })} />
                </div>
                <div className="flex flex-col w-full">
                  <label>Number</label>
                  <input type="text" name="number" className='w-full' value={state.number} onChange={(e) => dispatch({ type: 'set', payload: { name: e.target.name, value: e.target.value } })} />
                </div>
              </div>
              <div className="flex-row flex gap-2 w-full">
                <div className="flex flex-col w-full">
                  <label>Filing Date</label>
                  <input type="text" name="filingDate" className='w-full' value={state.filingDate} onChange={(e) => dispatch({ type: 'set', payload: { name: e.target.name, value: e.target.value } })} />
                </div>
                <div className="flex flex-col w-full ">
                  <label>Issue Date</label>
                  <input type="text" name="issueDate" className='w-full' value={state.issueDate} onChange={(e) => dispatch({ type: 'set', payload: { name: e.target.name, value: e.target.value } })} />
                </div>
              </div>
              <label>Abstract</label>
              <textarea name="abstract" className="h-40 bg-[#cccccc] w-full p-2 caret-red-400" value={state.abstract} onChange={(e) => dispatch({ type: 'set', payload: { name: e.target.name, value: e.target.value } })} />
            </div>

            {/*  <label>Description</label>
            <input type="text" name="description" value={state.description} onChange={(e) => dispatch({ type: 'set', payload: { name: e.target.name, value: e.target.value } })} /> */}
            <button type="">Submit</button>
          </div>
          {/* <div className="flex flex-col justify-center items-center">
            <h2>Add Claims</h2>
            <ul>
              {state.claims.map((claim, index) => (
                <li key={index}>
                  {claim}
                  <button onClick={() => handleEditClaim(index)}>Edit</button>
                  <button onClick={() => handleDeleteClaim(index)}>Delete</button>
                </li>
              ))}
            </ul>
            {editingClaimIndex !== -1 ? (
              <>
                <input type="text" value={newClaim} onChange={handleChange} />
                <button onClick={handleUpdateClaim}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <input type="text" value={newClaim} onChange={handleChange} />
                <button onClick={handleAddClaim}>Add Claim</button>
              </>
            )}
          </div>
          <div className="flex flex-col justify-center items-center">
            <h2>Add People</h2>

            <label>Inventor</label>
            <input type="text" name="inventors" value={state.inventors} onChange={(e) => dispatch({ type: 'set', payload: { name: e.target.name, value: e.target.value } })} />
            <label>Applicant</label>
            <input type="text" name="applicant" value={state.applicant} onChange={(e) => dispatch({ type: 'set', payload: { name: e.target.name, value: e.target.value } })} />
          </div>
 */}

        </div>
      </div>
    </div>
  )
}