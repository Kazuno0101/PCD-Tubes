import profile from '../assets/profile.png';

const Colourfull = () => {
	return (
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
								<div className="flex flex-col items-center justify-center">
									<label className="block text-sm font-medium text-gray-700">
										Photo
									</label>
									<div className="flex items-center mt-1">
										<img
											src={profile}
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
	);
};

export default Colourfull;
