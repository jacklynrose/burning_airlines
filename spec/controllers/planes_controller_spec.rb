require 'rails_helper'

RSpec.describe PlanesController, :type => :controller do
  describe "GET /planes.json" do
    it "responds with all the planes" do
      planes = create_list(:plane, 10)

      get :index, format: :json

      expect(response.body).to eq(planes.to_json)
    end
  end

  describe "POST /planes.json" do
    it "creates a new plane" do
      expect {
        post :create, format: :json, plane: attributes_for(:plane)
      }.to change { Plane.count }.by(1)
    end

    it "responds with the plane" do
      plane_attributes = attributes_for(:plane)

      post :create, format: :json, plane: plane_attributes

      expect(response.body).to include(plane_attributes[:name])
      expect(response.body).to include(plane_attributes[:rows].to_s)
      expect(response.body).to include(plane_attributes[:columns].to_s)
    end
  end

  describe "PUT /planes/:id.json" do
    it "updates a plane" do
      plane = create(:plane)

      expect {
        put :update, id: plane.id, format: :json, plane: { name: "JQ123" }
      }.to change {
        p = Plane.find(plane.id)
        p.name
      }
    end

    it "responds with the plane" do
      plane = create(:plane)

      put :update, id: plane.id, format: :json, plane: { name: "JQ123" }

      expect(response.body).to include("JQ123")
      expect(response.body).to include(plane.rows.to_s)
      expect(response.body).to include(plane.columns.to_s)
    end
  end

  describe "DELETE /planes/:id.json" do
    it "destroys the plane" do
      plane = create(:plane)

      expect {
        delete :destroy, id: plane.id, format: :json
      }.to change { Plane.count }.from(1).to(0)
    end

    it "responds with a basic object" do
      plane = create(:plane)

      delete :destroy, id: plane.id, format: :json

      expect(response.body).to eq("{\"status\":\"OK\"}")
    end
  end
end
