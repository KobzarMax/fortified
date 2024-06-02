import { TailSpin } from 'react-loader-spinner'

export const Loader = () => {
    return (
        <div className={`loader-wrapper`}>
            <TailSpin
                visible={true}
                height="80"
                width="80"
                color="#8F00FF"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    )
}