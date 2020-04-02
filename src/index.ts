export default function make_phone_call(phoneno: string) {
	return new Promise<boolean>((resolve, reject) => {
		wx.makePhoneCall({
			phoneNumber: phoneno,
			fail() {
				reject(false);
			},
			success() {
				resolve(true);
			}
		});
	});
}
