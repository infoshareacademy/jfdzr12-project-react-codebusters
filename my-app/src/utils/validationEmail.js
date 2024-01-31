const MINIMUM_NAME_LETTER_LENGTH = 1;

const hasUserNameMinimumCharts = (email) => {
  return email.length >= MINIMUM_NAME_LETTER_LENGTH; //todo change email.length
};

export const validateEmail = (email) => {
  const errorMessages = [];
  if (!hasUserNameMinimumCharts(email)) {
    errorMessages.push("User mane have to contain minimum one letter");
  }

  return errorMessages;
};
