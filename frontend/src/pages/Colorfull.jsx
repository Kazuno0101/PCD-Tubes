import { useEffect } from 'react';
import { useState } from 'react';

import axios from 'axios';
import fileDownload from 'js-file-download';

const Colourfull = () => {
	const [statusGambar, setStatusGambar] = useState(null);
	const [selectedFile, setSelectedFile] = useState(null);
	const [after, setAfter] = useState(null);
	const [loader, setLoader] = useState(false);
	const [status, setStatus] = useState(true);

	useEffect(() => {}, [statusGambar, setStatusGambar]);

	const handleGambarAgain = (event) => {
		event.preventDefault();

		setStatusGambar(!statusGambar);
		setSelectedFile(null);
		setAfter(null);
	};

	const handleDownload = (url, filename) => {
		axios.get(url, {
			responseType: 'file',
		}).then((res) => {
			fileDownload(res.data, filename);
		});
	};

	const onFileChange = (event) => {
		// Update the state
		setSelectedFile(event.target.files[0]);
	};

	const onFileUpload = async () => {
		if (selectedFile != null && (selectedFile.type == 'mp4' || selectedFile.type == 'jpg')) {
			// Create an object of formData
			const formData = new FormData();

			// Update the formData object
			formData.append('file', selectedFile);
			formData.append('name', 'colorfull');

			try {
				setLoader(true);
				const response = await axios({
					method: 'post',
					url: 'http://127.0.0.1:8000/api/files/',
					data: formData,
					headers: { 'Content-Type': 'multipart/form-data' },
				});
				setLoader(false);
				setAfter(response.data);
			} catch (error) {
				console.log(error);
			}
			setStatusGambar(!statusGambar);
		} else {
			alert('Harus memasukan gambar/video!');
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
		} else if (bytes === 1) {
			bytes = bytes + ' byte';
		} else {
			bytes = '0 bytes';
		}
		return bytes;
	};

	const formatBeforeImage = () => {
		return after.file.replace('static', 'media/static');
	};

	const formatAfterImageEccv = () => {
		return after.file.replace('static', 'media/static').replace('.jpg', '_eccv16.png');
	};

	const formatAfterImageSiggraph = () => {
		return after.file.replace('static', 'media/static').replace('.jpg', '_siggraph17.png');
	};

	const formatExt = () => {
		const arr = after.file.split('.');

		return arr[arr.length - 1];
	};

	const formatSize = async (url) => {
		// return request(
		// 	{
		// 		url: url,
		// 		method: 'HEAD',
		// 	},
		// 	function (err, response, body) {
		// 		console.log(response.headers);
		// 		process.exit(0);
		// 	}
		// );

		return url;
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
									Kelompok 10 - Prediksi Warna Colourfull
								</p>
							</div>
						</div>

						<div className="mt-5 md:mt-0">
							<div className="shadow sm:overflow-hidden sm:rounded-md">
								<div className="px-4 py-5 space-y-6 bg-white sm:p-6">
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
													MP4,
													AVI
													up
													to
													10MB
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="px-4 py-3 text-right bg-gray-50 sm:px-6">
									{!loader ? (
										<button
											onClick={
												onFileUpload
											}
											className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
										>
											Generate
										</button>
									) : (
										<button
											disabled
											type="button"
											className="text-white w-full bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center mr-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 flex justify-center items-center"
										>
											<svg
												role="status"
												className="inline w-4 h-4 mr-3 text-white animate-spin"
												viewBox="0 0 100 101"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
													fill="#E5E7EB"
												/>
												<path
													d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
													fill="currentColor"
												/>
											</svg>
											<p className="text-center">
												Loading...
											</p>
										</button>
									)}
								</div>
							</div>
						</div>
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
									<div className="flex flex-col items-center justify-center w-full sm:w-1/3">
										<label className="block text-sm font-medium text-gray-700">
											Before
										</label>
										<div className="flex items-center mt-1">
											{formatExt() ==
												'jpg' ||
											formatExt() ==
												'png' ? (
												<img
													src={formatBeforeImage()}
													alt="Logo"
													className="bg-center bg-cover w-96 h-96"
												/>
											) : (
												<video
													className="bg-center bg-cover w-96 h-96"
													controls
												>
													<source
														src={formatBeforeImage()}
														type="video/mp4"
													/>
												</video>
											)}
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
													<div className="px-4 py-5 bg-white-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
														<li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
															<div className="flex-shrink-0 ml-4">
																<button
																	onClick={() => {
																		handleDownload(
																			formatBeforeImage(),
																			after.name
																		);
																	}}
																	className="font-medium text-indigo-600 hover:text-indigo-500"
																>
																	Download
																</button>
															</div>
														</li>
													</div>
												</dl>
											</div>
										</div>
									</div>
									<div className="flex flex-col items-center justify-center w-full sm:w-1/3">
										<label className="block text-sm font-medium text-gray-700">
											After ECCV
										</label>
										<div className="flex items-center mt-1">
											{formatExt() ==
												'jpg' ||
											formatExt() ==
												'png' ? (
												<img
													src={formatAfterImageEccv()}
													alt="Logo"
													className="bg-center bg-cover w-96 h-96"
												/>
											) : (
												<video
													className="bg-center bg-cover w-96 h-96"
													controls
												>
													<source
														src={formatAfterImageEccv()}
														type="video/mp4"
													/>
												</video>
											)}
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
															{formatExt()}
														</dd>
													</div>
													<div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
														<dt className="text-sm font-medium text-gray-500">
															Size
														</dt>
														<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
															{formatSizeUnits(
																formatSize(
																	formatAfterImageEccv()
																)
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
													<div className="px-4 py-5 bg-white-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
														<li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
															<div className="flex-shrink-0 ml-4">
																<button
																	onClick={() => {
																		handleDownload(
																			formatAfterImageEccv(),
																			after.name
																		);
																	}}
																	className="font-medium text-indigo-600 hover:text-indigo-500"
																>
																	Download
																</button>
															</div>
														</li>
													</div>
												</dl>
											</div>
										</div>
									</div>
									<div className="flex flex-col items-center justify-center w-full sm:w-1/3">
										<label className="block text-sm font-medium text-gray-700">
											After Siggraph
										</label>
										<div className="flex items-center mt-1">
											{formatExt() ==
												'jpg' ||
											formatExt() ==
												'png' ? (
												<img
													src={formatAfterImageSiggraph()}
													alt="Logo"
													className="bg-center bg-cover w-96 h-96"
												/>
											) : (
												<video
													className="bg-center bg-cover w-96 h-96"
													controls
												>
													<source
														src={formatAfterImageSiggraph()}
														type="video/mp4"
													/>
												</video>
											)}
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
															{formatExt()}
														</dd>
													</div>
													<div className="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
														<dt className="text-sm font-medium text-gray-500">
															Size
														</dt>
														<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
															{formatSizeUnits(
																formatSize(
																	formatAfterImageSiggraph()
																)
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
													<div className="px-4 py-5 bg-white-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
														<li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
															<div className="flex-shrink-0 ml-4">
																<button
																	onClick={() => {
																		handleDownload(
																			formatAfterImageSiggraph(),
																			after.name
																		);
																	}}
																	className="font-medium text-indigo-600 hover:text-indigo-500"
																>
																	Download
																</button>
															</div>
														</li>
													</div>
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
