import React, {useState, useEffect} from 'react';
import { Form } from '@unform/web';
import Input from './Input';



const IntCalc = () => {
const [result, setresult] = useState()
useEffect(() => {
    return () => {
    }
}, [result])

    function handleSubmit(data) {
        console.log(data);
        var {P1, P2, N1, N2} = data
        
        const resultado = sendToAwsIntCalc(parseFloat(P1),parseFloat(P2),parseFloat(N1),parseFloat(N2))
        console.log(resultado);
        setresult(resultado);
        return resultado
        // { email: 'test@example.com', password: '123456' }
      }

    function sendToAwsIntCalc(p1,p2,n1,n2,z = 1.96) {
       
       
        const var1 = p1*(1-p1)/n1;
        const var2 = p2*(1-p2)/n2;
        const int1 = [p1-Math.sqrt(var1)*z,p1+Math.sqrt(var1)*z];
        const int2 = [p2-Math.sqrt(var2)*z,p2+Math.sqrt(var2)*z];
        const ret  = [int1[0]/int2[1],int1[1]/int2[0]];
        console.log(`Var1= ${var1} e ${var2}, int = ${int1} e ${int2}`)
        
        return ret;
    }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
                        Proportions
                      </label>
                      <Input name="P1" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="control group proportion"/>
                    </div>
                    <div className="md:w-1/2 px-3">
                      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-last-name">
                        Sizes
                      </label>
                      <Input 
                      className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" 
                      id="grid-last-name" 
                      type="text" 
                      placeholder="placebo group proportion"
                      name="P2"                      />
                    </div>
                </div>
                <div className="-mx-3 md:flex mb-6">
                    <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                      <Input name="N1" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-first-name" type="text" placeholder="control group size"/>
                    </div>
                    <div className="md:w-1/2 px-3">
                      <Input name="N2" className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-last-name" type="text" placeholder="placebo group size"/>
                    </div>
                </div>
            <div className="mt-6 flex justify-center">
            <button className="flex shadow-md font-medium py-2 px-4 text-green-100 cursor-pointer bg-green-600 rounded text-lg tr-mt  svelte-jqwywd">
                        Calcular
            </button>
            </div>
            </div>
            </Form>
            <div>
                <h1>Resultado: </h1> 
                <p>{result}</p>
            </div>

        </div>
    );
}

export default IntCalc;