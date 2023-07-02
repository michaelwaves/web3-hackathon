export default function UploadConfirmation() {
    return (
        <div className="flex-col-center">
            <h2>Congrats, you minted your first patent nft!</h2>
            <button onClick={() => { window.location.href = "/portfolio" }}>Go to portfolio</button>
        </div>
    )
}