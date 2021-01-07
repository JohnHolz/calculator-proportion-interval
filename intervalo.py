def hat_var(p,n):
    return p*(1-p)/n

def confidence_interval(p,n,z=1.96):
    confidence_range = z*(hat_var(p,n)**(1/2))
    return [p-confidence_range,p+confidence_range]

def lambda_handler(event, context):
    convertidos_afetados, convertidos_controle = event['convertidos_afetados'],event['convertidos_controle']
    total_afetados, total_controle = event['total_afetados'],event['total_controle']
    p1,p2 = convertidos_afetados/total_afetados, convertidos_controle/total_controle 
    inter1, inter2 = confidence_interval(p1,total_afetados),confidence_interval(p2,total_controle)
    return [inter1[0]/inter2[1],inter1[1]/inter2[0]]

#event = {'convertidos_afetados':15,'convertidos_controle':10,'total_afetados':100,'total_controle':150}
#interval(event=ev,context=0)