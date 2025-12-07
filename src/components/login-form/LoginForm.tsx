
function LoginForm() {
    return (
        <>
            <div>
                <label htmlFor="role">IAM a</label>
                <select id="role" name="role"  className="bg-(--color-bg)">
                    <option value={'patient'}>Patient</option>
                    <option value={'doctor'}>Doctor</option>
                    <option value={'student doctor'}>Student Doctor</option>
                    <option value={'reciptionist'}>Reciptionist</option>
                </select>
            </div>
        </>
    )
}

export default LoginForm