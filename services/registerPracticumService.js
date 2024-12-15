const { registerUser, getPracticumByEmail, getPracticumByNim } = require("../repository/registerPracticumRepository")
const { getResearchByEmail, getResearchByNim} = require("../repository/registerResearchRepository")
const registerUserService = async (
    name,
    nim,
    className,
    email,
    noHp,
    gender,
    faculty,
    year,
    major,
    document,
  ) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailRegex.test(email)) {
      throw new Error("Format email tidak valid.");
    }
  
    const existingPracticumByNIM = await getPracticumByNim(nim);
    if (existingPracticumByNIM) {
      throw new Error("NIM sudah terdaftar.");
    }
  
    const existingPracticumByEmail = await getPracticumByEmail(email);
    if (existingPracticumByEmail) {
      throw new Error("Email sudah terdaftar.");
    }

    const existingResearchByNIM = await getResearchByNim(nim);
    if (existingResearchByNIM) {
      throw new Error("NIM sudah terdaftar.");
    }
  
    const existingResearchByEmail = await getResearchByEmail(email);
    if (existingResearchByEmail) {
      throw new Error("Email sudah terdaftar.");
    }
  
    const user = await registerUser(
      name,
      nim,
      className,
      email,
      noHp,
      gender,
      faculty,
      year,
      major,
      document,
    );
  
    return user;
  };

module.exports = { registerUserService }