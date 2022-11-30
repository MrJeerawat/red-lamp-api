
import { CreateOption } from './optionDtos';
import { CreateSweetness } from './sweetnessDtos';
import { CreateType } from './typeDtos';

export class CreateAttribute {
    typesId: CreateType[];
    sweetnessId: CreateSweetness[];
    optionId: CreateOption[];
}
export class UpdateAttribute {
    typesId: CreateType[];
    sweetnessId: CreateSweetness[];
    optionId: CreateOption[];
}