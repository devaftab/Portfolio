import { useState } from "react";
const validate = (name, email, message) => {
  const newErrors = {};
  if (!name.trim()) newErrors.name = "Name is required";
  if (!email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    newErrors.email = "Enter valid email id";
  }
  if (!message.trim()) newErrors.message = "Message is required";
  return newErrors;
};

export default validate;
