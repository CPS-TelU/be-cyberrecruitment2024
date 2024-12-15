const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const registerUser = async (
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
    const result = await prisma.practicum.create({
      data: {
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
      },
    });
  
    return result;
  };

const getPracticumByNim = async (nim) => {
  const user = await prisma.practicum.findUnique({
    where: { nim },
  });
  
  return user;
};

const getPracticumByEmail = async (email) => {
  const user = await prisma.practicum.findUnique({
    where: { email },
  });

  return user;
};

module.exports = {
  registerUser, getPracticumByNim, getPracticumByEmail
}