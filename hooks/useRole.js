const useRole = () => {
    const getrole = document.cookie.split(";")[1];
    const role = getrole.split("=")[1];

    return role;
}

export { useRole };
