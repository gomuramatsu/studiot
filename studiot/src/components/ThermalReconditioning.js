import React, { Component } from 'react';
import '../App.css';

class ThermalReconditioning extends Component {
  componentDidMount() {
    window.scrollTo(0,0);
	}

  render() {
    return (
    	<div>
	    	{ this.props.getLanguage() === "en" ? 
		    	<div className="NonCentered">
		      	<center><h2>Thermal Reconditioning/Japanese Hair Straightening</h2></center>
		      	<center><p><strong>It's for naturally wavy/curly hair.   Chemical solutions from Japan.</strong></p></center>
		      	<br />

		      	<p>We specialize in hair straightening for any type of hair.  We use an innovative new technique from Japan to make frizzy, curly or wavy hair completely straight while preserving your hair’s health. If you like your hair totally straight all the time, then this Japanese Hair Straightening/Thermal Reconditioning procedure is for you.</p> 
						<p>And if your hair is very important to you, please contact us. STUDiO T looks forward to welcome you for your first consultation.</p>
				      	<br />
						
						<center><h3>Frequently Asked Questions about Thermal Reconditioning</h3></center>
						
						<p><strong>Q: How long does it take?</strong></p>

						<p>A: It will take from 4 to 6 hours. Factors affecting time are: type, length, condition of hair and how many stylists are going to be working on it.</p>

						<p><strong>Q: Is it permanent?</strong></p>  
						<p>A: Yes, hair that has been treated will stay straight. So when the roots start growing back, you may want to do a retouch. 
						(swimming in heavily chlorinated pools may cause hair to revert back)</p>

						<p><strong>Q: When will I need to do a retouch?</strong></p> 
						<p>A: It depends on the type of curl/wave and the length.
						If your hair is very curly, you may want to do the roots in 4 or 5 months. If your hair is only slightly wavy, you may be alright for about 1 year(provided you don't cut it short). The longer you keep your hair, the better it will be if you don't want to do it often. The length helps pull the roots straighter with weight when it starts to grow back.</p>

						<p><strong>Q: Will a retouch be cheaper and faster?</strong></p>   
						<p>A: No not usually. A retouch is actually more difficult to do because of the risk of damage to the previously done hair. Treatments must be used before during and after.</p>

						<p><strong>Q: Will my hair really be better and healthier after the treatment?</strong></p>
						<p>A: If performed properly with excellent products, it should seem healthier for a couple of months. But because it is a permanent procedure done with chemicals, it will actually be a little more damaged than before. But with using a good shampoo, treatment and leave in treatment, your hair will be just fine.</p>

						<p><strong>Q: Can I have it done if I had Hi-lights or a relaxer done?</strong></p> 
						<p>A: Yes usually. Hair that has been hi-lighted is very different (damaged) compared with virgin hair, so it can be difficult. Sometimes it will not work on hair that is too damaged. But we will know at the consultation. We are experienced with many different systems (weakest -strongest), so after the consultation, we can choose the appropriate products and procedure for your case.</p>

						<p><strong>Q: Can I color or perm my hair before or after having it done?</strong></p> 
						<p>A: Yes, you can color your hair. If you want to lighten your natural color a little, you can do that first. Or if you want to darken it with a true semi-permanent, we would usually advise it for after. It really depends on the situation. We do not recommend Hi-lights(with bleach) after this procedure, as it could be very damaging. Also you should not attempt to perm it with regular North American solutions, as it will be very damaging. Only special solutions from Japan can be used after this treatment.</p>

						<p><strong>Q: Will all my hair fall out or break off at the roots?</strong></p>
						<p>A: Not if you have an experienced and properly trained stylist perform it for you. Taro has 12 years of Hair Straightening/TR experience. Also you can have a free consultation so that you and we could make sure that everything is fine with your hair.</p>

						<p><strong>Q: After the procedure, what do I have to do?</strong></p> 
						<p>A: The hair should not be washed for about 48 hours. And it should be kept as straight as possible for about 5 -7 days. Good shampoo, treatments/conditioners and leave in treatments/conditioners should be used. We also carry the best hair care products from Japan for after this treatment. Please feel free to ask/contact us if you are interested.</p>
		      </div>

	    	: 
		      <div className="NonCentered">
		      	<center><h2>縮毛矯正</h2></center>
		      	<center><p><strong>日本から取り寄せた液剤を使用しています</strong></p></center>
		      	<br />

		      	<p>We specialize in hair straightening for any type of hair.  We use an innovative new technique from Japan to make frizzy, curly or wavy hair completely straight while preserving your hair’s health. If you like your hair totally straight all the time, then this Japanese Hair Straightening/Thermal Reconditioning procedure is for you.</p> 
						<p>And if your hair is very important to you, please contact us. STUDiO T looks forward to welcome you for your first consultation.</p>
				      	<br />
						
						<center><h3>よくあるご質問</h3></center>
						
						<p><strong>Q: どのくらい時間がかかりますか？</strong></p>

						<p>A: およそ４時間から６時間程度かかります。かかる時間は、髪質、髪の長さ、髪のコンディション、そしてＴＲのサービスをさせていただくスタイリストの人数によって異なります。</p>

						<p><strong>Q: 一度縮毛矯正をしたら、永遠にとれないものですか？</strong></p>  
						<p>A: 一度ストレートにした髪はずっとストレートのままです。髪が伸び始めると、伸びた分は縮毛矯正されていませんので、お客様の多くは時期を見て、リタッチをご希望されます。
						（まれに、塩素消毒された室内プールなどで水泳をすると、髪が元に戻ることがあります）</p>

						<p><strong>Q: リタッチはいつ頃すれば良いですか？</strong></p> 
						<p>髪質、クセ毛の度合い、長さなどによって異なります。クセの強い方は、４～５カ月後くらいに根元にリタッチをすると良いでしょう。クセがそれほど強くない方でしたら、１年くらいリタッチの必要はありません。長い髪の方が、根元が伸びてきた際に髪の重さでストレート感が出ますので、リタッチをあまり好まない場合は、ロングヘアをキープすることをお勧めします。</p>

						<p><strong>Q: リタッチは、値段が安く、早く済みますか？</strong></p>   
						<p>A: いいえ、通常はそうではありません。リタッチは髪のダメージによるリスクが高いため、より高度な技術を持つスタイリストが行います。また、リタッチ前後にはトリートメントをお勧めします。</p>

						<p><strong>Q: トリートメントをすると髪質が良くなり、健康な髪になりますか？</strong></p>
						<p>A: 髪に合った良いヘアケア商品を使えば２カ月程度は健康な髪の状態を保つことができるようですが、ケミカルによる影響で髪はどうしてもダメージを受けます。そのため、シャンプーやトリートメント、洗い流さないタイプのトリートメントなど、ご自分の髪に合った質の良いヘアケア商品を選びましょう。</p>

						<p><strong>Q: ハイライトやストレートパーマの髪でも大丈夫ですか？</strong></p> 
						<p>A: 通常は大丈夫です。ハイライトをした髪は、何もしていない髪に比べるとダメージを受けています。まれに傷みがひどいため、縮毛矯正をするのが難しいケースもあります。縮毛矯正をしても問題がないかどうか、事前のコンサルティングでチェックします。スタジオＴはさまざまな髪質に熟知していますので、安心してご相談ください。コンサルティング後に、あなたの髪に一番合うプロダクトと手順で縮毛矯正を致します。</p>

						<p><strong>Q: カラーやパーマを縮毛矯正前後にしても大丈夫ですか？</strong></p> 
						<p>A: カラーは問題ありません。もし明るい色をご希望でしたら、縮毛矯正前にセミ・パーマネントのカラーを、よりダークな色をご希望でしたら、縮毛矯正後のカラーをお勧めします。ケースバイケースですが、縮毛矯正後のブリーチを使ったハイライトは、ダメージのリスクが高いのでお勧めしません。また、北米のパーマ液はダメージのリスクが高いのでお勧めしませんが、十分なトリートメント後に、スタジオＴの日本から取り寄せた液剤を使用すればパーマも可能です。</p>

						<p><strong>Q: 髪が抜けたり、根元から切れたりすることはありませんか？</strong></p>
						<p>A: 経験豊富で確かな技術を持つスタイリストが行えば、そのようなことは起こりません。スタジオＴの太郎は、縮毛矯正の経験12年。技術も熟練しています。無料のコンサルティングで、縮毛矯正について不安に思っていること等、なんでもお気軽にお尋ねください。</p>

						<p><strong>Q: 縮毛矯正後のケアは？</strong></p> 
						<p>A: 48時間は髪を洗わないでください。５～７日間は、できる限り髪をストレートの状態にしておいてください。質の良いシャンプー、トリートメント/コンディショナー、洗い流さないトリートメント/コンディショナーを使うことをお勧めします。スタジオＴでは、日本から取り寄せた、縮毛矯正後に最適の優れた商品を取り扱っています。ご興味のある方はどうぞお気軽にお問い合わせください。</p>
		      </div>
	    	}
    	</div>
    );
  }
}

export default ThermalReconditioning;
