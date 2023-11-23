import React, { useState } from 'react'
import Select from 'react-select'
import './Reservation.css';
import { useForm, Controller } from "react-hook-form";
import { Link } from 'react-router-dom';

export const emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const occasions = [
  { value: 'Birthday', label: 'Birthday' },
  { value: 'Engagament', label: 'Engagament' },
  { value: 'Anniversary', label: 'Anniversary' }
];

const diners = [
  { value: '1', label: '1 Diner' },
  { value: '3', label: '3 Diner' },
  { value: '5', label: '5 Diner' },
  { value: '7', label: '7 Diner' },
  { value: '9', label: '9 Diner' },
  { value: '10', label: '10 Diner' }
];

const timings = [
  { value: '1', label: '1 PM' },
  { value: '3', label: '3 PM' },
  { value: '5', label: '5 PM' },
  { value: '7', label: '7 PM' },
  { value: '9', label: '9 PM' },
  { value: '10', label: '10 PM' }
];


const Reservation = () => {
  const { handleSubmit,control,register,formState: { errors } } = useForm();
  const [booked, setBooked] = useState(false);
  const onSubmit = (data) => {
    console.log('data',data);
    setBooked(true);
  }
  return (
    <div>
      {
        booked ? 
        <>
          <div className='confirmation'>
            <h3>Your Reservation has been Confirmed</h3>
            <Link to={'/'}><button>Back Home</button></Link>
          </div>
        </> :
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
          <div className='main-form'>
          <h1 className='display-4'>Reservation</h1>
          <div className='row my-4'>
            <div className='col-6'>
              <input type="text" className={`form-control ${errors.firstname ? 'is-invalid' : ''}`} placeholder="First Name"
              {...register("firstname", { required: 'Please enter first name' })} />
              {errors && errors.firstname && <span className='error'>{errors.firstname.message}</span>}
            </div>
            <div className='col-6'>
              <input type="text" className={`form-control ${errors.lastname ? 'is-invalid' : ''}`} placeholder="Last Name"
              {...register("lastname", { required: 'Please enter last name' })}/>
              {errors && errors.lastname && <span className='error'>{errors.lastname.message}</span>}
            </div>
          </div>
          <div className='row my-4'>
            <div className='col-6'>
              <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} placeholder="Enter email"
              {...register("email",
                { required: 'Please enter email',
                    pattern: {
                        value: emailPattern,
                        message: 'Please enter a valid email',
                    },
                })
              } />
              {errors && errors.email && <span className='error'>{errors.email.message}</span>}
            </div>
            <div className='col-6'>
              <input type="number" className={`form-control ${errors.contact ? 'is-invalid' : ''}`} placeholder="Enter contact"
              {...register("contact", { required: 'Please enter contact' })}/>
              {errors && errors.contact && <span className='error'>{errors.contact.message}</span>}
            </div>
          </div>
          <div className='row my-4'>
            <div className='col-6'>
            <Controller
              name="occasion"
              control={control}
              rules={{ required: true }}
              render={({ field: { onChange, value } }) => {
                return (
                  <>
                    <Select
                      placeholder={'Select Occasion'} 
                      options={occasions}
                      value={value}
                      onChange={(e) => { onChange(e) }}
                    />
                  </>
                );
              }}
            />
            {errors && errors.occasion && <span className='error'>Please Select Occasion</span>}
            </div>
            <div className='col-6'>
              <Controller
                name="diners"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => {
                  return (
                    <>
                      <Select
                        placeholder={'Select Diners'} 
                        options={diners}
                        value={value}
                        onChange={(e) => { onChange(e) }}
                      />
                    </>
                  );
                }}
              />
              {errors && errors.diners && <span className='error'>Please Select Diners</span>}
            </div>
          </div>
          <div className='row my-4'>
            <div className='col-6'>
              <Controller
                name="timings"
                control={control}
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => {
                  return (
                    <>
                      <Select
                        placeholder={'Select Time'} 
                        options={timings}
                        value={value}
                        onChange={(e) => { onChange(e) }}
                      />
                    </>
                  );
                }}
              />
              {errors && errors.timings && <span className='error'>Please Select Timings</span>}
            </div>
            <div className='col-6'>
              <input type="date" className={`form-control ${errors.date ? 'is-invalid' : ''}`}
              {...register('date', { required: 'Please enter date' })}  />
              {errors && errors.date && <span className='error'>{errors.date.message}</span>}
            </div>
          </div>
          <div className='row my-4'>
            <div className='col-12'>
              <textarea placeholder='Special Comment' {...register('comments')}></textarea>
            </div>
          </div>
          <div className='row my-4'>
            <div className='display-4 submit-button'>
              <button type='submit'>Book Reservation</button>
            </div>
          </div>
          </div>
        </form>
      }
    </div>
  )
}

export default Reservation