import useSWR from "swr";

const fetcher = (...args) => {
    return fetch(...args).then(res => res.json());
}

function Swr() {
    const { data, error } = useSWR("https://dog.ceo/api/breeds/image/random", fetcher, { suspense: true });

    if(error) {
        return <h1>There was an error...</h1>
    }

    return (
        <div>
            <img width={500} src={data.message} alt={"dogs"} />
        </div>
    )
}

export default Swr;