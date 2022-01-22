function showInfo(user: any) {
  console.log(`User Info ${user.id}, ${user.username}, ${user.firstName}`);
}

function showFormattedInfo(user: any) {
  console.log(
    "User Info",
    `
    id: ${user.id}
    username: ${user.username}
    firstName: ${user.firstName}`
  );
}

function handleError(code: number, message: string): never {
  throw new Error(`${message}. Code: ${code}`);
}

function sumNumbers(limit: number) {
    let sum
}

export { showInfo, showFormattedInfo, handleError };
