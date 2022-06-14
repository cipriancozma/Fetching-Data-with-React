import useSWR from "swr";

const fetcher = (...args) => {
    return fetch(...args).then(res => res.json());
}

function Swr() {
    const { data } = useSWR("https://dog.ceo/api/breeds/image/random", fetcher)

    return (
        <div>
            <img width={500} src={data?.message} alt={"dogs"} />
        </div>
    )
}

export default Swr;