

export const FetchRepo = async () => {
  const response = await fetch("https://api.github.com/users/armandozabala/repos");
  let myRepos = await response.json();
  return myRepos;
}