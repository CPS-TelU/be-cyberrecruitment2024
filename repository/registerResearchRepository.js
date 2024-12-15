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
    const result = await prisma.research.create({
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

const getResearchByNim = async (nim) => {
  const user = await prisma.research.findUnique({
    where: { nim },
  });
  
  return user;
};

const getResearchByEmail = async (email) => {
  const user = await prisma.research.findUnique({
    where: { email },
  });

  return user;
};

module.exports = {
  registerUser, getResearchByNim, getResearchByEmail
}