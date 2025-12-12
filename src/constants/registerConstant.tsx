import { CiUser } from "react-icons/ci";

export const registrationNameFields = [
    { id: 'fname', label: 'first name', type: 'text', placeholder: 'john', name: 'fname' },
    { id: 'lname', label: 'last name', type: 'text', placeholder: 'john', name: 'lname' },
]

export const registrationFields = [
    { id: 'fullname', label: 'Full Name', type: 'text', placeholder: 'john', name: 'fullname' },
    { id: 'email', label: 'Email', type: 'email', placeholder: 'john.doe@example.com', name: 'email' },
    { id: 'phone', label: 'Phone number', type: 'text', placeholder: '+1 (555) 000-000', name: 'phone' },
    { id: 'password', label: 'Password', type: 'password', placeholder: 'password', name: 'password' },
    { id: 'cPassword', label: 'Confirm Password', type: 'password', placeholder: 'confirm password', name: 'cPassword' },
]

export const rolesData = [
    {
        id: "patient",
        title: "Patient",
        desc: "book appointments, access medical records, and manage your healthcare",
        icon: (props: any) => <CiUser className={props} />,
        iconColor: "text-blue-600",
        circleColor: "bg-blue-100",
        link: "/register/patient-register"
    },
    {
        id: "doctor",
        title: "Doctor",
        desc: "manage patients, appointments, and provide quality healthcare",
        icon: (props: any) => <CiUser className={props} />,
        iconColor: "text-green-600",
        circleColor: "bg-green-100",
    },
    {
        id: "student",
        title: "Student Doctor",
        desc: "learn and assist under supervision while gaining experience",
        icon: (props: any) => <CiUser className={props} />,
        iconColor: "text-purple-600",
        circleColor: "bg-purple-100",
    },
    {
        id: "receptionist",
        title: "Receptionist",
        desc: "handle patient registration, scheduling, and administrative tasks",
        icon: (props: any) => <CiUser className={props} />,
        iconColor: "text-orange-600",
        circleColor: "bg-orange-100",
    }
];
