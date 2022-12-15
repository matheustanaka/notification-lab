// Exporta um tipo Replace que basicamente pode aceitar duas tipagens:
//T: tipagem original, que nesse caso são as nossas props
//R: tipagem de replace, que nesse caso são quais props a gente deseja substituir com essa nova tipagem de replace
export type Replace<T, R> = Omit<T, keyof R> & R;
