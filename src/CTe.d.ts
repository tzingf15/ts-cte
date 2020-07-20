
 


	export const enum ItemChoiceType1 {
		CNPJ = 0,
		CPF = 1
	}
	export const enum ItemChoiceType2 {
		CNPJ = 0,
		CPF = 1
	}
	export const enum ItemChoiceType3 {
		CNPJ = 0,
		CPF = 1
	}
	export const enum ItemChoiceType4 {
		CNPJ = 0,
		CPF = 1
	}
	export const enum ItemChoiceType8 {
		CNPJ = 0,
		CPF = 1
	}
	export const enum TAmb {
		Item1 = 0,
		Item2 = 1
	}
	export const enum TCodUfIBGE {
		Item11 = 0,
		Item12 = 1,
		Item13 = 2,
		Item14 = 3,
		Item15 = 4,
		Item16 = 5,
		Item17 = 6,
		Item21 = 7,
		Item22 = 8,
		Item23 = 9,
		Item24 = 10,
		Item25 = 11,
		Item26 = 12,
		Item27 = 13,
		Item28 = 14,
		Item29 = 15,
		Item31 = 16,
		Item32 = 17,
		Item33 = 18,
		Item35 = 19,
		Item41 = 20,
		Item42 = 21,
		Item43 = 22,
		Item50 = 23,
		Item51 = 24,
		Item52 = 25,
		Item53 = 26
	}
	export const enum TCTeInfCteIdeIndGlobalizado {
		Item1 = 0
	}
	export const enum TCTeInfCteIdeIndIEToma {
		Item1 = 0,
		Item2 = 1,
		Item9 = 2
	}
	export const enum TCTeInfCteIdeRetira {
		Item0 = 0,
		Item1 = 1
	}
	export const enum TCTeInfCteIdeTpEmis {
		Item1 = 0,
		Item4 = 1,
		Item5 = 2,
		Item7 = 3,
		Item8 = 4
	}
	export const enum TCTeInfCteIdeTpImp {
		Item1 = 0,
		Item2 = 1
	}
	export const enum TCTeInfCteIdeTpServ {
		Item0 = 0,
		Item1 = 1,
		Item2 = 2,
		Item3 = 3,
		Item4 = 4
	}
	export const enum TFinCTe {
		Item0 = 0,
		Item1 = 1,
		Item2 = 2,
		Item3 = 3
	}
	export const enum TModCT {
		Item57 = 0
	}
	export const enum TModTransp {
		Item01 = 0,
		Item02 = 1,
		Item03 = 2,
		Item04 = 3,
		Item05 = 4,
		Item06 = 5
	}
	export const enum TProcEmi {
		Item0 = 0,
		Item3 = 1
	}
	export const enum TTransformURI {
		httpwwww3org200009xmldsigenvelopedsignature = 0,
		httpwwww3orgTR2001RECxmlc14n20010315 = 1
	}
	export const enum TUf {
		AC = 0,
		AL = 1,
		AM = 2,
		AP = 3,
		BA = 4,
		CE = 5,
		DF = 6,
		ES = 7,
		GO = 8,
		MA = 9,
		MG = 10,
		MS = 11,
		MT = 12,
		PA = 13,
		PB = 14,
		PE = 15,
		PI = 16,
		PR = 17,
		RJ = 18,
		RN = 19,
		RO = 20,
		RR = 21,
		RS = 22,
		SC = 23,
		SE = 24,
		SP = 25,
		TO = 26,
		EX = 27
	}
	export const enum TUF_sem_EX {
		AC = 0,
		AL = 1,
		AM = 2,
		AP = 3,
		BA = 4,
		CE = 5,
		DF = 6,
		ES = 7,
		GO = 8,
		MA = 9,
		MG = 10,
		MS = 11,
		MT = 12,
		PA = 13,
		PB = 14,
		PE = 15,
		PI = 16,
		PR = 17,
		RJ = 18,
		RN = 19,
		RO = 20,
		RR = 21,
		RS = 22,
		SC = 23,
		SE = 24,
		SP = 25,
		TO = 26
	}
	interface KeyInfoType {
		Id: string;
		X509Data: X509DataType;
	}
	interface ReferenceType {
		DigestMethod: ReferenceTypeDigestMethod;
		DigestValue: number[];
		Id: string;
		Transforms: TransformType[];
		Type: string;
		URI: string;
	}
	interface ReferenceTypeDigestMethod {
		Algorithm: string;
	}
	interface SignatureType {
		Id: string;
		KeyInfo: KeyInfoType;
		SignatureValue: SignatureValueType;
		SignedInfo: SignedInfoType;
	}
	interface SignatureValueType {
		Id: string;
		Value: number[];
	}
	interface SignedInfoType {
		CanonicalizationMethod: SignedInfoTypeCanonicalizationMethod;
		Id: string;
		Reference: ReferenceType;
		SignatureMethod: SignedInfoTypeSignatureMethod;
	}
	interface SignedInfoTypeCanonicalizationMethod {
		Algorithm: string;
	}
	interface SignedInfoTypeSignatureMethod {
		Algorithm: string;
	}
	interface TCTe {
		infCte: TCTeInfCte;
		infCTeSupl: TCTeInfCTeSupl;
		Signature: SignatureType;
	}
	interface TCTeInfCte {
		autXML: TCTeInfCteAutXML[];
		compl: TCTeInfCteCompl;
		dest: TCTeInfCteDest;
		emit: TCTeInfCteEmit;
		exped: TCTeInfCteExped;
		Id: string;
		ide: TCTeInfCteIde;
		imp: TCTeInfCteImp;
		infRespTec: TRespTec;
		Item: any;
		receb: TCTeInfCteReceb;
		rem: TCTeInfCteRem;
		versao: string;
		vPrest: TCTeInfCteVPrest;
	}
	interface TCTeInfCteAutXML {
		Item: string;
		ItemElementName: ItemChoiceType8;
	}
	interface TCTeInfCteCompl {
		destCalc: string;
		Entrega: TCTeInfCteComplEntrega;
		fluxo: TCTeInfCteComplFluxo;
		ObsCont: TCTeInfCteComplObsCont[];
		ObsFisco: TCTeInfCteComplObsFisco[];
		origCalc: string;
		xCaracAd: string;
		xCaracSer: string;
		xEmi: string;
		xObs: string;
	}
	interface TCTeInfCteComplEntrega {
		Item: any;
		Item1: any;
	}
	interface TCTeInfCteComplFluxo {
		pass: TCTeInfCteComplFluxoPass[];
		xDest: string;
		xOrig: string;
		xRota: string;
	}
	interface TCTeInfCteComplFluxoPass {
		xPass: string;
	}
	interface TCTeInfCteComplObsCont {
		xCampo: string;
		xTexto: string;
	}
	interface TCTeInfCteComplObsFisco {
		xCampo: string;
		xTexto: string;
	}
	interface TCTeInfCteDest {
		email: string;
		enderDest: TEndereco;
		fone: string;
		IE: string;
		ISUF: string;
		Item: string;
		ItemElementName: ItemChoiceType4;
		xNome: string;
	}
	interface TCTeInfCteEmit {
		CNPJ: string;
		enderEmit: TEndeEmi;
		IE: string;
		IEST: string;
		xFant: string;
		xNome: string;
	}
	interface TCTeInfCteExped {
		email: string;
		enderExped: TEndereco;
		fone: string;
		IE: string;
		Item: string;
		ItemElementName: ItemChoiceType2;
		xNome: string;
	}
	interface TCTeInfCteIde {
		cCT: string;
		cDV: string;
		CFOP: string;
		cMunEnv: string;
		cMunFim: string;
		cMunIni: string;
		cUF: TCodUfIBGE;
		dhCont: string;
		dhEmi: string;
		indGlobalizado: TCTeInfCteIdeIndGlobalizado;
		indGlobalizadoSpecified: boolean;
		indIEToma: TCTeInfCteIdeIndIEToma;
		Item: any;
		mod: TModCT;
		modal: TModTransp;
		natOp: string;
		nCT: string;
		procEmi: TProcEmi;
		retira: TCTeInfCteIdeRetira;
		serie: string;
		tpAmb: TAmb;
		tpCTe: TFinCTe;
		tpEmis: TCTeInfCteIdeTpEmis;
		tpImp: TCTeInfCteIdeTpImp;
		tpServ: TCTeInfCteIdeTpServ;
		UFEnv: TUf;
		UFFim: TUf;
		UFIni: TUf;
		verProc: string;
		xDetRetira: string;
		xJust: string;
		xMunEnv: string;
		xMunFim: string;
		xMunIni: string;
	}
	interface TCTeInfCteImp {
		ICMS: TImp;
		ICMSUFFim: TCTeInfCteImpICMSUFFim;
		infAdFisco: string;
		vTotTrib: string;
	}
	interface TCTeInfCteImpICMSUFFim {
		pFCPUFFim: string;
		pICMSInter: string;
		pICMSUFFim: string;
		vBCUFFim: string;
		vFCPUFFim: string;
		vICMSUFFim: string;
		vICMSUFIni: string;
	}
	interface TCTeInfCteReceb {
		email: string;
		enderReceb: TEndereco;
		fone: string;
		IE: string;
		Item: string;
		ItemElementName: ItemChoiceType3;
		xNome: string;
	}
	interface TCTeInfCteRem {
		email: string;
		enderReme: TEndereco;
		fone: string;
		IE: string;
		Item: string;
		ItemElementName: ItemChoiceType1;
		xFant: string;
		xNome: string;
	}
	interface TCTeInfCTeSupl {
		qrCodCTe: string;
	}
	interface TCTeInfCteVPrest {
		Comp: TCTeInfCteVPrestComp[];
		vRec: string;
		vTPrest: string;
	}
	interface TCTeInfCteVPrestComp {
		vComp: string;
		xNome: string;
	}
	interface TEndeEmi {
		CEP: string;
		cMun: string;
		fone: string;
		nro: string;
		UF: TUF_sem_EX;
		xBairro: string;
		xCpl: string;
		xLgr: string;
		xMun: string;
	}
	interface TEndereco {
		CEP: string;
		cMun: string;
		cPais: string;
		nro: string;
		UF: TUf;
		xBairro: string;
		xCpl: string;
		xLgr: string;
		xMun: string;
		xPais: string;
	}
	interface TImp {
		Item: any;
	}
	interface TransformType {
		Algorithm: TTransformURI;
		XPath: string[];
	}
	interface TRespTec {
		CNPJ: string;
		email: string;
		fone: string;
		hashCSRT: number[];
		idCSRT: string;
		xContato: string;
	}
	interface X509DataType {
		X509Certificate: number[];
	}
