import {Leads} from "../../core/models/leads";
import {PilatParams} from "../../core/models/pilatParams";
import {Opportunities} from "../../core/models/opportunities";

export class PipelineColumn {
  prospectStages: Leads[];
  opportunityStages: Opportunities[];
  tickets: string[] ;
  props: PilatParams;
  totalFrom: number;
  currencyFrom: string;
  totalTo: number;
  currencyTo: string;
  totalLeads: number;
  totalSuperficies: number;
  isInStageOpportunity:boolean;
  isInStageProspect:boolean;
}
