import React from "react";
export const Home = (containerStyle) => {

	return (
			<div className="homepage" id="homepage" style={containerStyle}>
				{" "}
				"İçinde yaşadığımız dünyanın nasıl çalıştığını anlamaya çalışmak,
				hayatımın en büyük tutkusu oldu olmayada devam edecek gibi gözüküyor.
				Çocukluğumun o söküp takılan oyuncakları; bugün daha büyük sistemlerin
				ve fikirlerin yapı taşlarını öğrenmeye,
				<span style={{ fontWeight: "500" }}> 'neden' </span> ve{" "}
				<span style={{ fontWeight: "500" }}> 'nasıl' </span>
				sorularını daha çok sormama sebep oldu. Her geçen gün yeni bir şey
				öğrenmek ve onu kullanmak istiyor insan."
			</div>
	);
};
