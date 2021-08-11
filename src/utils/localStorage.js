export const saveStateLs = data => {
    localStorage.setItem("state", JSON.stringify(data));
};

export const getStateLs = partOfState => {
    const data = localStorage.getItem("state");

    return data ? JSON.parse(data)[partOfState] : undefined;
};
