class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
    render :index
  end
  
  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
  end

  private

  def pokemon_params
    params.require(:pokemon).permit(:id, :name, :attack, :defense, :poke_type, :moves, :image_url)
  end
end
