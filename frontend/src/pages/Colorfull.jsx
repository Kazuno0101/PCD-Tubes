import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

import profile from '../assets/profile.png';

const Colourfull = () => {
	const [statusGambar, setStatusGambar] = useState(null);
	const [selectedFile, setSelectedFile] = useState(null);

	useEffect(() => {}, [statusGambar, setStatusGambar]);

	const handleGambarAgain = (event) => {
		event.preventDefault();

		setStatusGambar(!statusGambar);
		setSelectedFile(null);
	};

	const onFileChange = (event) => {
		// Update the state
		setSelectedFile(event.target.files[0]);
	};

	const onFileUpload = () => {
		// Create an object of formData
		const formData = new FormData();

		// Update the formData object
		formData.append('myFile', selectedFile, selectedFile.name);

		// Details of the uploaded file
		console.log(selectedFile);

		// Request made to the backend api
		// Send formData object
		// axios.post('URL').then((res) => {
		// 	console.log(res);
		// 	setStatusGambar(!statusGambar);
		// });
		setStatusGambar(!statusGambar);
	};

	const fileData = () => {
		if (selectedFile) {
			return (
				<div>
					<h2>File Details:</h2>
					<p>File Name: {selectedFile.name}</p>

					<p>File Type: {selectedFile.type}</p>

					<p>Last Modified: {selectedFile.lastModifiedDate.toDateString()}</p>
				</div>
			);
		} else {
			return (
				<div>
					<br />
					<h4>Choose before Pressing the Upload button</h4>
				</div>
			);
		}
	};

	const formatSizeUnits = (bytes) => {
		if (bytes >= 1073741824) {
			bytes = (bytes / 1073741824).toFixed(2) + ' GB';
		} else if (bytes >= 1048576) {
			bytes = (bytes / 1048576).toFixed(2) + ' MB';
		} else if (bytes >= 1024) {
			bytes = (bytes / 1024).toFixed(2) + ' KB';
		} else if (bytes > 1) {
			bytes = bytes + ' bytes';
		} else if (bytes == 1) {
			bytes = bytes + ' byte';
		} else {
			bytes = '0 bytes';
		}
		return bytes;
	};
	return (
		<>
			{!statusGambar ? (
				<div className="my-10">
					<div className="flex flex-col w-2/3 mx-auto">
						<div className="my-10 text-center">
							<div className="px-4 sm:px-0">
								<h3 className="text-lg font-medium leading-6 text-gray-900">
									Pengolahan Citra Digital
								</h3>
								<p className="mt-1 text-sm text-gray-600">
									Kelompok 10 - Penebakan Warna Colourfull
								</p>
							</div>
						</div>
						<div className="mt-5 md:mt-0">
							<div className="shadow sm:overflow-hidden sm:rounded-md">
								<div className="px-4 py-5 space-y-6 bg-white sm:p-6">
									<div className="flex flex-col items-center justify-center">
										<label className="block text-sm font-medium text-gray-700">
											Photo
										</label>
										<div className="flex items-center mt-1">
											<img
												src={
													profile
												}
												alt="Logo"
												className="bg-center bg-cover w-96 h-96"
											/>
										</div>
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700">
											File
										</label>
										<div className="flex items-center justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
											<div className="space-y-1 text-center ">
												<svg
													className="w-12 h-12 mx-auto text-gray-400"
													stroke="currentColor"
													fill="none"
													viewBox="0 0 48 48"
													aria-hidden="true"
												>
													<path
														d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
														strokeWidth={
															2
														}
														strokeLinecap="round"
														strokeLinejoin="round"
													/>
												</svg>
												<div className="flex justify-center text-sm text-gray-600">
													<input
														onChange={
															onFileChange
														}
														type="file"
														className="ml-20"
													/>
												</div>
												<p className="text-xs text-gray-500">
													PNG,
													JPG,
													GIF
													up
													to
													10MB
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
									<button
										onClick={onFileUpload}
										className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
									>
										Generate
									</button>
								</div>
							</div>
						</div>
						{fileData()}
					</div>
				</div>
			) : (
				<div className="my-10">
					<div className="flex flex-col w-full mx-auto sm:w-2/3">
						<div className="my-10 text-center">
							<div className="px-4 sm:px-0">
								<h3 className="text-lg font-medium leading-6 text-gray-900">
									Pengolahan Citra Digital
								</h3>
								<p className="mt-1 text-sm text-gray-600">
									Kelompok 10 - Penebakan Warna Colourfull
								</p>
							</div>
						</div>
						<div className="mt-5 md:mt-0">
							<div className="shadow sm:overflow-hidden sm:rounded-md ">
								<div className="flex flex-col justify-around px-4 py-5 space-y-10 bg-white sm:p-6 sm:flex-row sm:space-y-0">
									<div className="flex flex-col items-center justify-center w-full sm:w-1/2">
										<label className="block text-sm font-medium text-gray-700">
											Before
										</label>
										<div className="flex items-center mt-1">
											<img
												src={
													profile
												}
												alt="Logo"
												className="bg-center bg-cover w-96 h-96"
											/>
										</div>
										<div className="w-full mt-10 overflow-hidden bg-white shadow sm:rounded-lg">
											<div className="px-4 py-5 sm:px-6">
												<h3 className="text-lg font-medium leading-6 text-gray-900">
													Properties
												</h3>
											</div>
											<div className="border-t border-gray-200">
												<dl>
													{/* <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
														<dt className="text-sm font-medium text-gray-500">
															Resolusi
														</dt>
														<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
															100
															X
															100
															px
														</dd>
													</div> */}
													<div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
														<dt className="text-sm font-medium text-gray-500">
															Ekstensi
														</dt>
														<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
															{
																selectedFile.type
															}
														</dd>
													</div>
													<div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
														<dt className="text-sm font-medium text-gray-500">
															Size
														</dt>
														<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
															{formatSizeUnits(
																selectedFile.size
															)}
														</dd>
													</div>
													{/* <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
														<dt className="text-sm font-medium text-gray-500">
															Durasi
														</dt>
														<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
															45
															Detik
														</dd>
													</div> */}
													{/* <div className="px-4 py-5 bg-white-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
														<li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
															<div className="flex-shrink-0 ml-4">
																<a
																	href="#"
																	className="font-medium text-indigo-600 hover:text-indigo-500"
																>
																	Download
																</a>
															</div>
														</li>
													</div> */}
												</dl>
											</div>
										</div>
									</div>
									<div className="flex flex-col items-center justify-center w-full sm:w-1/2">
										<label className="block text-sm font-medium text-gray-700">
											After
										</label>
										<div className="flex items-center mt-1">
											<img
												src={
													profile
												}
												alt="Logo"
												className="bg-center bg-cover w-96 h-96"
											/>
										</div>
										<div className="w-full mt-10 overflow-hidden bg-white shadow sm:rounded-lg">
											<div className="px-4 py-5 sm:px-6">
												<h3 className="text-lg font-medium leading-6 text-gray-900">
													Properties
												</h3>
											</div>
											<div className="border-t border-gray-200">
												<dl>
													{/* <div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
														<dt className="text-sm font-medium text-gray-500">
															Resolusi
														</dt>
														<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
															{
																selectedFile.name
															}
														</dd>
													</div> */}
													<div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
														<dt className="text-sm font-medium text-gray-500">
															Ekstensi
														</dt>
														<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
															{
																selectedFile.type
															}
														</dd>
													</div>
													<div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
														<dt className="text-sm font-medium text-gray-500">
															Size
														</dt>
														<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
															{formatSizeUnits(
																selectedFile.size
															)}
														</dd>
													</div>
													{/* <div className="px-4 py-5 bg-white sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
														<dt className="text-sm font-medium text-gray-500">
															Durasi
														</dt>
														<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
															45
															Detik
														</dd>
													</div> */}
													{/* <div className="px-4 py-5 bg-white-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
														<li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
															<div className="flex-shrink-0 ml-4">
																<a
																	href="#"
																	className="font-medium text-indigo-600 hover:text-indigo-500"
																>
																	Download
																</a>
															</div>
														</li>
													</div> */}
												</dl>
											</div>
										</div>
									</div>
								</div>
								<div className="px-4 py-3 text-right bg-gray-50 sm:px-6 ">
									<button
										onClick={handleGambarAgain}
										className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
									>
										Generate Again
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Colourfull;
