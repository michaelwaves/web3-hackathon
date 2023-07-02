export default function RemoveConfirmation() {
    return (
        <div className="flex-col-center">
            <h2>Patent Successfully Deleted!</h2>
            <button onClick={() => { window.location.href = "/" }}>View Patents</button>
        </div>
    )
}