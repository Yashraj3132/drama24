// src/HomePage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f4f8;
  padding: 1rem; /* Adds padding for smaller screens */
`;

const Form = styled.form`
  background-color: #ffffff;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  width: 100%; /* Makes form take full width on small screens */
  box-sizing: border-box; /* Includes padding and border in width calculation */

  @media (max-width: 480px) {
    padding: 1.5rem; /* Reduces padding on smaller screens */
  }
`;

const Input = styled.input`
  width: 100%; /* Takes full width inside the form */
  padding: 0.75rem; /* Increases padding for better touch experience */
  margin: 1rem 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;

  @media (max-width: 480px) {
    font-size: 0.9rem; /* Slightly smaller font size on smaller screens */
  }
`;

const Button = styled.button`
  background-color: #6200ea;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  width: 100%; /* Full-width button on smaller screens */

  &:hover {
    background-color: #3700b3;
  }

  @media (min-width: 481px) {
    width: auto; /* Normal button width on larger screens */
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #333333;

  @media (max-width: 480px) {
    font-size: 1.5rem; /* Slightly smaller title on smaller screens */
  }
`;

function HomePage() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/welcome/${name}`);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Enter Your Name</Title>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
}

export default HomePage;
