import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';








function AddRecipe() {
  const navigate = useNavigate();


  const [inputFields, setInputFields] = useState([
    {Procedure: ''},

  ])

  const [inputs, setInputs] = useState({
    recipe: '',
    description: '',
    ingredients: '',
    country: '',
    people: '',
    rating:'',
    images:''

  })

  const handleChange1 = (e)=>{
    setInputs({
      ...inputs, [e.target.name]: e.target.value,
    });
  };



  const handleChange = (index, event) => {
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputFields(values);

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('InputFields', inputFields)
    fetch("url", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(setInputs),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/");
        console.log(data);
      });
  }

  const handleAddFields = () =>{
    setInputFields([...inputFields, {Procedure: ''}])
  }

  const handleRemoveFields = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  }
  return (
    <Container className='AddRecipe'>
    <h1>Add Recipe</h1>
      <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
      type='text'
      name='recipe'
      placeholder='name:'
      onChange={handleChange1}
       />
       <br />

       <label>Description:</label>
      <textarea
      type='text'
      name='description'
      placeholder='full description:'
      onChange={handleChange1}
       />
       <br/>
       <label>Ingredients:</label>
      <input
      type='text'
      name='recipe'
      placeholder='onions, ginger, eggs,...'
      onChange={handleChange1}
       />

      <br/>
      <label>Procedure:</label>
        {inputFields.map((inputField, index) => (
          <div key={index}
          className='mapInput'>
          <TextField
          className='proc'
          name='Procedure'
          placeholder='procedure:'
          variant='filled'
          value={inputField.ingredient}
          onChange={event => handleChange(index, event)} />


          <div className='AddSub'>
          <IconButton
          onClick={()=>handleRemoveFields(index)}>
            <RemoveIcon />
          </IconButton>
          <IconButton
          onClick={()=>handleAddFields()}>
            <AddIcon />
          </IconButton>
          </div>


         </div>


        ))}

        <div className='short'>
        <label>Country</label>
        <input
        type='text'
        name='recipe'
        placeholder='country'
        onChange={handleChange1}
       />
       <br/>
       <label>People:</label>
        <input
        type='number'
        name='people'
        placeholder='2'
        onChange={handleChange1}
        />

       <br/>

       <label>Rating:</label>
        <input
        type='number'
        name='rating'
        placeholder='0 - 10'
        onChange={handleChange1}/>
        <br/>

       <label>Images:</label>
        <input
        type='file'
        name='images'
        placeholder='0 - 10'
        onChange={handleChange1}/>
        </div>



      </form>
      <Button
      variant='contained'
      type='submit'
      onClick={handleSubmit}
      >Submit</Button>
    </Container>
  )
}

export default AddRecipe

