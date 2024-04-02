export const getAllData = async () => {
    const res = await fetch(
        process.env.API,
        {
            next: {
                revalidate: 3600,
            },
        }
    );
    return res.json();
};
