import './App.css';
import Navbar from './component/Navbar';
import profile from './assets/profile.png';

function App() {
	return (
		<>
			<Navbar />
			<div className="my-10">
				<div className="flex flex-col w-2/3 mx-auto">
					<div className="my-10 text-center">
						<div className="px-4 sm:px-0">
							<h3 className="text-lg font-medium leading-6 text-gray-900">Pengolahan Citra Digital</h3>
							<p className="mt-1 text-sm text-gray-600">Kelompok 10 - Penebakan Warna Grayscale</p>
						</div>
					</div>
					<div className="mt-5 md:mt-0">
						<form action="#" method="POST">
							<div className="shadow sm:overflow-hidden sm:rounded-md">
								<div className="px-4 py-5 space-y-6 bg-white sm:p-6">
									<div className="flex flex-col justify-center items-center">
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
										<div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-gray-300 border-dashed rounded-md">
											<div className="space-y-1 text-center">
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
												<div className="flex text-sm text-gray-600">
													<label
														htmlFor="file-upload"
														className="relative font-medium text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
													>
														<span>
															Upload
															a
															file
														</span>
														<input
															id="file-upload"
															name="file-upload"
															type="file"
															className="sr-only"
														/>
													</label>
													<p className="pl-1">
														or
														drag
														and
														drop
													</p>
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
										type="submit"
										className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
									>
										Generate
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>

			{/* <div className="my-10">
				<div className="flex flex-col w-full sm:w-2/3 mx-auto">
					<div className="my-10 text-center">
						<div className="px-4 sm:px-0">
							<h3 className="text-lg font-medium leading-6 text-gray-900">Pengolahan Citra Digital</h3>
							<p className="mt-1 text-sm text-gray-600">Kelompok 10 - Penebakan Warna Grayscale</p>
						</div>
					</div>
					<div className="mt-5 md:mt-0">
						<form action="#" method="POST">
							<div className="shadow sm:overflow-hidden sm:rounded-md  ">
								<div className="px-4 py-5 justify-around bg-white sm:p-6 flex flex-col sm:flex-row space-y-10 sm:space-y-0">
									<div className="flex flex-col w-full sm:w-1/2 justify-center items-center">
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
										<div className="overflow-hidden mt-10 w-full bg-white shadow sm:rounded-lg">
											<div className="px-4 py-5 sm:px-6">
												<h3 className="text-lg font-medium leading-6 text-gray-900">
													Properties
												</h3>
											</div>
											<div className="border-t border-gray-200">
												<dl>
													<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
														<dt className="text-sm font-medium text-gray-500">
															Resolusi
														</dt>
														<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
															100
															X
															100
															px
														</dd>
													</div>
													<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
														<dt className="text-sm font-medium text-gray-500">
															Ekstensi
														</dt>
														<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
															JPG
														</dd>
													</div>
													<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
														<dt className="text-sm font-medium text-gray-500">
															Size
														</dt>
														<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
															2.25Mb
														</dd>
													</div>
													<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
														<dt className="text-sm font-medium text-gray-500">
															Durasi
														</dt>
														<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
															45
															Detik
														</dd>
													</div>
													<div className="bg-white-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
														<li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
															<div className="flex w-0 flex-1 items-center">

																<svg
																	className="h-5 w-5 flex-shrink-0 text-gray-400"
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 20 20"
																	fill="currentColor"
																	aria-hidden="true"
																>
																	<path
																		fillRule="evenodd"
																		d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
																		clipRule="evenodd"
																	/>
																</svg>
																<span className="ml-2 w-0 flex-1 truncate">
																	resume_back_end_developer.pdf
																</span>
															</div>
															<div className="ml-4 flex-shrink-0">
																<a
																	href="#"
																	className="font-medium text-indigo-600 hover:text-indigo-500"
																>
																	Download
																</a>
															</div>
														</li>
													</div>
												</dl>
											</div>
										</div>
									</div>
									<div className="flex flex-col w-full sm:w-1/2 justify-center items-center">
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
										<div className="overflow-hidden mt-10 w-full bg-white shadow sm:rounded-lg">
											<div className="px-4 py-5 sm:px-6">
												<h3 className="text-lg font-medium leading-6 text-gray-900">
													Properties
												</h3>
											</div>
											<div className="border-t border-gray-200">
												<dl>
													<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
														<dt className="text-sm font-medium text-gray-500">
															Resolusi
														</dt>
														<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
															100
															X
															100
															px
														</dd>
													</div>
													<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
														<dt className="text-sm font-medium text-gray-500">
															Ekstensi
														</dt>
														<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
															JPG
														</dd>
													</div>
													<div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
														<dt className="text-sm font-medium text-gray-500">
															Size
														</dt>
														<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
															2.25Mb
														</dd>
													</div>
													<div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
														<dt className="text-sm font-medium text-gray-500">
															Durasi
														</dt>
														<dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
															45
															Detik
														</dd>
													</div>
													<div className="bg-white-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
														<li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
															<div className="flex w-0 flex-1 items-center">

																<svg
																	className="h-5 w-5 flex-shrink-0 text-gray-400"
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 20 20"
																	fill="currentColor"
																	aria-hidden="true"
																>
																	<path
																		fillRule="evenodd"
																		d="M15.621 4.379a3 3 0 00-4.242 0l-7 7a3 3 0 004.241 4.243h.001l.497-.5a.75.75 0 011.064 1.057l-.498.501-.002.002a4.5 4.5 0 01-6.364-6.364l7-7a4.5 4.5 0 016.368 6.36l-3.455 3.553A2.625 2.625 0 119.52 9.52l3.45-3.451a.75.75 0 111.061 1.06l-3.45 3.451a1.125 1.125 0 001.587 1.595l3.454-3.553a3 3 0 000-4.242z"
																		clipRule="evenodd"
																	/>
																</svg>
																<span className="ml-2 w-0 flex-1 truncate">
																	resume_back_end_developer.pdf
																</span>
															</div>
															<div className="ml-4 flex-shrink-0">
																<a
																	href="#"
																	className="font-medium text-indigo-600 hover:text-indigo-500"
																>
																	Download
																</a>
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
										type="submit"
										className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
									>
										Generate Again
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div> */}
		</>
	);
}

export default App;
