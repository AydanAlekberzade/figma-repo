import { useContext, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const user = {
  email: 'aydan04@gmail.com',
  pass: '1234',
};

const ContactLogin = () => {
  const emailRef = useRef(null);
  const passRef = useRef(null);
  // const navigate = useNavigate();

  const formSubmit = (e) => {
    e.preventDefault();
    if (!emailRef.current?.value || !passRef.current?.value) {
      alert('Fill out input, please!');
    } else {
      if (
        emailRef.current.value === user.email &&
        passRef.current.value === user.pass
      ) {
        alert('Welcome!');
        // navigate('/shop');
      } else {
        alert('Your email or password is wrong..');
      }
    }
  };

 
  return (
    <div className='contactlogin mt-5'>
      <div className='row'>
        <div className='col-12 col-sm-12 col-md-6'>
          <div className='login'>
            <div
              style={{ width: '100%' }}
              className='d-flex align-items-center justify-content-center flex-column'
            >
              <h1 className='my-5'>
                Get in touch.. 
              </h1>

              <div className='col-4'>
                <Form onSubmit={formSubmit}>
                  <Form.Group className='mb-3'>
                    <Form.Label>       
                        Email address 
                    </Form.Label>
                    <Form.Control
                      className='formcontrol'
                      ref={emailRef}
                      type='email'
                      placeholder='Enter email'
                    />
                    <Form.Text className='text-muted'>
                       We'll never share your email with anyone else.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className='mb-3'>
                    <Form.Label>
                     Password 
                    </Form.Label>
                    <Form.Control
                      className='formcontrol'
                      ref={passRef}
                      type='password'
                      placeholder='Password'
                    />
                  </Form.Group>

                  <Button className='mt-3' variant='secondary' type='submit'>
                 Submit 
                  </Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <div
          className='col-12 col-sm-12 col-md-6'
        >
          <img style={{width:"100%"}}
            src='https://zhabercomtr.teimg.com/zhaber-com-tr/images/upload/Insterstellar_en_iyi_yabancY_filmler.jpg'
            alt=''
          />
        </div>
      </div>
    </div>
  );
};

export default ContactLogin;
