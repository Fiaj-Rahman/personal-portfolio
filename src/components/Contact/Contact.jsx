import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Card, Input, Button, Typography, Alert } from "@material-tailwind/react";

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_ko2ltkd', 'template_o40chig', form.current, '2fEALvABHngVxtJPU')
      .then(
        () => {
          setSuccess(true);
          setError(null);
        },
        (error) => {
          setSuccess(false);
          setError(error.text);
        }
      );
  };

  return (
    <div className='m-10'>
      <div className='pt-6'>
        <h1
          data-aos="zoom-in-down"
          data-aos-duration="2000"
          className="text-5xl text-orange-900 font-serif font-bold text-center my-10 uppercase bg-gradient-to-r from-blue-700 via-black to-green-400 text-transparent bg-clip-text animate-gradient bg-300%"
        >
          CONTACT ME
        </h1>
      </div>
      <Card color="transparent" shadow={false}>
        <form ref={form} onSubmit={sendEmail} className="mt-8 m-auto mb-2 w-80 max-w-screen-lg sm:w-full">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              name="from_name"
              placeholder="Your Name"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              name="from_email"
              placeholder="name@mail.com"
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Message
            </Typography>
            <Input
              type="text"
              name="message"
              size="lg"
              placeholder="Enter your message..."
              className="!border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <Button type="submit" className="mt-6" fullWidth>
            Send Message
          </Button>
        </form>
        {success && (
          <Alert color="green" className="mt-4">
            Success! Your message has been sent.
          </Alert>
        )}
        {error && (
          <Alert color="red" className="mt-4">
            Failed to send message. Error: {error}
          </Alert>
        )}
      </Card>
    </div>
  );
};

export default Contact;
