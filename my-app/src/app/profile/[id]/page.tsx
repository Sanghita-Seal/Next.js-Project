export default function UserProfile({params}: any) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile Page</h1>
            <hr />
            <p>Profile page for user: 
                <span className="p-2 rounded ml-2 bg-amber-600 text-black">{params.id}</span>
            </p>
        </div>
    );
}
