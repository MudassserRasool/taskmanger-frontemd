const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const restrictedSpecialChars = /[\s,;<>()[\]{}!#$%^&*]/;
  const commonPatterns =
    /^(?!.*\.\.)(?!.*\.$)(?!.*@.*@)[^\s]{1,64}@[^\s]{1,255}$/;

  if (!emailRegex.test(email)) {
    return false;
  }

  if (restrictedSpecialChars.test(email)) {
    return false;
  }

  if (!commonPatterns.test(email)) {
    return false;
  }

  const [localPart, domain] = email.split('@');

  if (localPart.length > 64) {
    return false;
  }

  if (domain.length > 255) {
    return false;
  }

  return true;
};

export { isValidEmail };
