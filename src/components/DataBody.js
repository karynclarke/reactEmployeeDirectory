import React, { useContext } from 'react';
import '../styles/DataBody.css';
import DataAreaContext from '../utils/DataAreaContext';

const DataBody = () => {
	const context = useContext(DataAreaContext);

	return (
		<tbody>
			{context.developerState.filteredUsers[0] !== undefined && context.developerState.filteredUsers[0].name !== undefined ? (
				context.developerState.filteredUsers.map(({ login, name, picture, phone, email }) => {
					return (
						<tr key={login.uuid}>
							<td data-th="Image" className="align-middle">
								<img src={picture.medium} alt={'profile image for ' + name.first + ' ' + name.last} className="img-responsive" />
							</td>
							<td data-th="Name" className="name-cell align-middle">
								{name.first} {name.last}
							</td>
							<td data-th="Phone" className="align-middle">
								{phone}
							</td>
							<td data-th="Email" className="align-middle">
								<a href={'mailto:' + email} target="__blank">
									{email}
								</a>
							</td>
						</tr>
					);
				})
			) : (
				<></>
			)}
		</tbody>
	);
};

export default DataBody;
