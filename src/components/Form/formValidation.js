export function validate(values) {
  const errors = {}

  if (!values.email) {
    errors.email = 'Veuillez entrer une adresse email'
  } else if (!/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/.test(values.email)) {
    errors.email = 'Veuillez entrer une adresse email valide. Exemple: exemple@exemple.fr'
  }
  if (!values.password) {
    errors.password = 'Veuillez entrer un mot de passe'
  } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(values.password)) {
    errors.password = 'Le mot de passe doit faire au moins 8 caractères avec au moins une majuscule et un nombre'
  }
  return errors
}
