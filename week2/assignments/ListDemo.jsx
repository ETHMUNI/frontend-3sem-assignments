import React, { useState } from "react";


function MemberTable({ members }) {
    
    return (
        <table>
            <thead>
                <tr>
                    <th>UUID</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {members.map((member) => (
                    <tr key={member.uuid}>
                        <td>{member.uuid}</td>
                        <td>{member.name}</td>
                        <td>{member.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}


function MemberDemo(props) {
    return (
        <div>
            <h4>All Members</h4>
            <MemberTable members={props.members} />
        </div>
    );
}


export default function ListDemo() {
    const initialMembers = [
        { uuid: crypto.randomUUID(), name: "Peter", age: 18 },
        { uuid: crypto.randomUUID(), name: "Hanne", age: 35 },
        { uuid: crypto.randomUUID(), name: "Janne", age: 25 },
        { uuid: crypto.randomUUID(), name: "Holger", age: 22 },
    ];

    const [members, setMembers] = useState(initialMembers);

    return <MemberDemo members={members} />;
}