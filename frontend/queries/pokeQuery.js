import { gql } from '@apollo/client';

export const GET_POKEMON = gql`
  query Query($getPokemonId: String!) {
    getPokemon(id: $getPokemonId) {
      name
      sprites {
        front_default
      }
      types {
        type {
          name
        }
      }
    }
  }
`;
