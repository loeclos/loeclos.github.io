import {
    Card,
    CardHeader,
    CardContent,
} from '@/components/ui/card';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function Page() {
    return (
        <section
            id="ai-policy"
            className="relative min-h-screen w-full z-0"
        >
            <div className="relative z-10 h-fit w-full lg:py-0 md:py-0 py-20">
                <div className='flex min-h-screen justify-center items-center'>
                    <Card className="py-12 px-6 lg:px-15 w-full max-w-5xl flex flex-col justify-center rounded-4xl md:rounded-5xl text-white bg-transparent border-none">
                        <CardHeader className="text-5xl font-serif">
                            ai policy
                        </CardHeader>
                        <CardContent className="text-sm font-mono">
                            rules i try to follow
                        </CardContent>
                        <div className="grid grid-cols-1">
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>1. Learning.</AccordionTrigger>
                                    <AccordionContent>
                                        I am most strongly against using ai to help in any kind of learning process. If it does all the work for you, why did you spend all that time?
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>2. Search.</AccordionTrigger>
                                    <AccordionContent>
                                        I will <em>not</em> to use ai as a search engine, if possible. I think that learning to find information on your own is an important skill that you have to master.<br /><br />Of course, I might run into a &quot;one of a kind&quot; problem to which I need a quick and easy fix. In this case, I will utilize ai&apos;s services.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>3. Personnal Projects.</AccordionTrigger>
                                    <AccordionContent>
                                        I will try <em>not</em> to use ai in my personnal projects, for one reason only: I like coding. In the same way I wouldn&apos;t want another coder touching anything, I won&apos;t let a random llm do it.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>4. Work.</AccordionTrigger>
                                    <AccordionContent>
                                        This will totally depend on whether using ai is allowed. If yes, then of course! I can get 10x performance when I have an agent by my side. If I don&apos;t take advantage of this technology, then I will be left behind. This also overrides rules 1, 2, and 3.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-5">
                                    <AccordionTrigger>5. Exceptions.</AccordionTrigger>
                                    <AccordionContent>
                                        As to all rules in life, there are some exceptions:
                                        <br />
                                        <br />
                                        <ol>
                                            <li>1. I got a severe headache and can&apos;t think.</li>
                                            <li>2. I&apos;ve been trying to fix a bug for two days with no progress.</li>
                                        </ol>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
}
