const PASSWORD_RULE =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%_.-]).{8,}$/;

const PASSWORD_MESSAGE =
  'A jelszó tartalmazzon kis és nagybetűket illetve számokat és speciális karaktereket!';

export const REGEX = {
  PASSWORD_RULE,
  PASSWORD_MESSAGE,
};
