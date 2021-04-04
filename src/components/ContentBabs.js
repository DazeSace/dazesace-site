import FadeIn from "react-fade-in";

function ContentBabs() {
    return (
        <div className="flex flex-col justify-center text-center text-white">
            <FadeIn transitionDuration="800">
                <h2 className="text-2xl md:text-3xl mt-10 lg:mt-16">Hi Melissa</h2>
            </FadeIn>
            <div className="font-extralight text-lg md:text-2xl md:w-1/2 mx-auto px-10 mt-8">
                <FadeIn transitionDuration="800">
                    <p>
                        Wir lieben uns und schreiben uns Briefe. Das ist der Brief zum 3. Jahr unseres Zusammenseins.
                        Ich muss sagen, dass diese 3 Jahre einfach wundervoll waren. Ich kann mir aus heutiger Sicht
                        nicht vorstellen, wie es ohne dich wäre.
                    </p>
                </FadeIn>
            </div>
            <FadeIn transitionDuration="800" delay="600">
                <div className="font-extralight text-lg md:text-2xl md:w-1/2 mx-auto mt-5 mb-12 px-10">
                    <p>
                        Du bist immer für mich da, wünscht mir nur das Beste und bist einfach ein toller Mensch. Du bist
                        witzig, süß, wunderschön, sorgst dich um mich und alle unsere Friends. Ich liebe an dir, dass du
                        in dir selber so viel Liebe trägst, wie du manchmal abdrehst und auch einfach dass du manchmal
                        ein Zigo bist.
                    </p>
                    <p className="mt-5">
                        Ich rede mit niemand lieber als dir. Wenn wir reden und zusammen Zeit verbringen gibt es nix
                        Anderes. Mit dir fühle ich mich immer als wäre ich wo anders - an einem schöneren Ort. Mit dir
                        kann man all den Stress und all den Ärger dieser Welt vergessen. Mit dir kann ich wahren Frieden
                        finden. Danke dafür.
                    </p>
                    <p className="mt-5">
                        Ich liebe dich von ganzem Herzen Melissa. Ein Leben ohne dich ist nicht der real deal und
                        unvollständig. Ich wünsche mir sehr, dass wir für immer zusammen so viel Spaß haben können und
                        für immer zusammen sind. Mit dir fühle ich mich vollständig. Du gibst mir die Kraft all das zu
                        tun, was ich tue.
                    </p>
                    <p className="mt-5">
                        Ich danke dir Melissa für die schöne Zeit und ich hoffe, dass es für immer heißt: „Babs UND
                        Bebo“ und dass ich dich weiterhin „Bäbbels“ nennen darf. Irgendwann kommen dann noch die Balkone
                        mit Lichterketten und Doggos, solange wir zusammen bleiben.
                    </p>
                    <p className="mt-5">
                        Ich habe eine Playlist erstellt mit paar Songs, die mich an dich erinnern. Immer wenn ich die
                        höre, denk ich an dich. Ich habe hier noch ein paar meiner liebsten Lines aufgeschrieben.
                    </p>
                    <div className="flex justify-center mt-10">
                        <iframe src="https://open.spotify.com/embed/playlist/0f5oWTur2U10mSJwJRSXrQ" width="300"
                                height="380" frameBorder="0" allowTransparency="true" allow="encrypted-media"
                                title="spotify"/>
                    </div>
                    <div className="italic mt-10">
                        <p className="">
                            So gimme all your love</p>
                        <p>And I will be yours, through rain and through shine</p>
                        <p>Gimme all of your love</p>
                        <p>You will be mine through rain and through shine</p>
                    </div>
                    <div className="italic mt-10">
                        <p className="">Your pussy is a palace and your head is crazy</p>
                    </div>
                    <div className="italic mt-10">
                        <p className="">I say we sound better than you or me</p>
                    </div>
                    <div className="italic mt-10">
                        <p>You cross my mind, do not apologize for being fine as hell</p>
                        <p>I'm spinning here inside your spell, my mind has start to wander</p>
                        <p>I missed a day, I stay up late admiring your posture</p>
                    </div>
                    <div className="italic mt-10">
                        <p>Yeah you show me good loving</p>
                        <p>Make it alright</p>
                        <p>Need a little sweetness in my life</p>
                    </div>
                    <div className="italic mt-10">
                        <p>You are the one thing</p>
                        <p>The one thing, I'm living for</p>
                    </div>
                </div>
            </FadeIn>
        </div>
    );
}

export default ContentBabs;